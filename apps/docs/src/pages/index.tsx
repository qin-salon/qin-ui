import { Button } from "@qin/core";
import { useIsomorphicLayoutEffect } from "@qin/utils";

export default function Docs() {
  useIsomorphicLayoutEffect(() => {
    console.log("Qin docs page");
  }, []);
  return (
    <div>
      <h1>Qin Documentation</h1>
      <Button>Click me</Button>
    </div>
  );
}
