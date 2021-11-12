import basic from "./strategy/basic";
import jwt from "./strategy/jwt";

export default function passport() {
  basic();
  jwt();
}
