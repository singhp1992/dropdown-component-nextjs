import { Dispatch, RefObject, SetStateAction } from "react";
import { DogData, ValueState } from "../lib/types";
import {
  alternatingColors,
  focusWithinCss,
  hoverCss,
} from "../styles/globalStyles";

export default function Option({
  data,
  setSelectValue,
  selectRef,
  selectValue,
}: {
  data: DogData[];
  setSelectValue: Dispatch<SetStateAction<ValueState>>;
  selectRef: RefObject<HTMLDivElement>;
  selectValue: ValueState;
}) {
  // make this form reusable
  return (
    <div className="rounded-xl shadow-md mt-2 hover:cursor-pointer h-[300px] overflow-scroll z-50">
      {data?.map((dog: any, i: any) => (
        <div
          key={i}
          tabIndex={1}
          onClick={() => {
            // need to make sure that the current selectref isnt null
            selectRef.current!.focus();
            setSelectValue({ text: dog.name, color: alternatingColors[i % 3] });
          }}
          className={`px-4 py-2 flex items-center w-full ${
            selectValue.text == dog.name && "bg-focus-green"
          } ${i == "0" && "rounded-t-xl"}  ${focusWithinCss} ${hoverCss}`}
        >
          <div>
            <div
              className={`w-4 h-4  rounded-full flex justify-center items-center ${
                alternatingColors[i % 3]
              } `}
            />
          </div>
          <div className="pl-4">
            <p className="font-medium">{dog.name}</p>
            <p className="font-light truncate">{dog.temperament}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
