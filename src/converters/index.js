import { rot13Encode, rot13Decode } from "./rot13.js";
import { oppositeCaseEncode, oppositeCaseDecode } from "./oppositeCase.js";

export const convertLeftToRight = (leftSide, codec) => {
  if (codec === "rot13") {
    return rot13Encode(leftSide);
  } else if (codec === "oppositeCase") {
    return oppositeCaseEncode(leftSide);
  } else {
    return leftSide;
  }
};

export const convertRightToLeft = (rightSide, codec) => {
  if (codec === "rot13") {
    return rot13Decode(rightSide);
  } else if (codec === "oppositeCase") {
    return oppositeCaseDecode(rightSide);
  } else {
    return rightSide;
  }
};