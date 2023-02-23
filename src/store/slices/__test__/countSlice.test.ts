import { fireEvent, render, screen } from "@testing-library/react";
import { CountType } from '../countSlice';

import reducer, { add, reset } from "../countSlice";

describe("With React Testing Library", () => {
  test("should handle a todo being added to an empty list", () => {
    const previousState: CountType = { count: 10 };

    expect(reducer(previousState, add())).toEqual({ count: 11 });  //test init state and add

		const previousState2: CountType = { count: 11 };
    expect(reducer(previousState2, add())).toEqual({ count: 12 });  //test init state and add
  });

});
