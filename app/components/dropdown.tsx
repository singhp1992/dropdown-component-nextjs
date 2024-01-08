import { Dispatch, RefObject, SetStateAction } from "react";
import { DogData } from "../lib/types";
import { focusWithinCss, hoverCss } from "../styles/globalStyles";

// todo: need to update the type here
export default function DropDown({
  data,
  setSelectValue,
  selectRef,
}: {
  // need to fix this one
  data: DogData[];
  setSelectValue: Dispatch<SetStateAction<string>>;
  selectRef: RefObject<HTMLDivElement>;
}) {
  const alternatingColor = [
    "bg-light-yellow",
    "bg-light-green",
    "bg-light-blue",
  ];
  return (
    <div className="rounded-xl shadow-md mt-2 hover:cursor-pointer h-[300px] overflow-scroll">
      {data?.map((dog: any, i: any) => (
        <div
          key={i}
          tabIndex={1}
          onClick={() => {
            //   need to make sure that the current selectref isnt null
            selectRef.current!.focus();
            setSelectValue(dog.name);
          }}
          className={`px-4 py-2 flex items-center w-full ${
            i == "0" && "rounded-t-xl"
          }  ${focusWithinCss} ${hoverCss}`}
        >
          <div>
            <div
              className={`w-4 h-4  rounded-full flex justify-center items-center ${
                alternatingColor[i % 3]
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
