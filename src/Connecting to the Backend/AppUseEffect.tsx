import { useEffect, useRef } from "react";

// To keep the components pure, keep changes out of the rending phase
// With the effect hook we can tell react to execute a peice of code after the component has been rendered
// It should be called after render :)

const AppUseEffect = () => {
  const ref = useRef<HTMLInputElement>(null);

  // this piece of code has a side effect, it changes the focus of the input field
  //   if (ref.current) ref.current.focus();

  // Now it does not have a side effect, it only runs after the component has been rendered
  useEffect(() => {
    if (ref.current) ref.current.focus();
  }, []);

  // we call effect hook multiple times, but it only runs once after the component has been rendered
  useEffect(() => {
    document.title = "Reacr Cookbook";
  });

  return (
    <div>
      <input ref={ref} type="text" className="form-control" />
    </div>
  );
};

export default AppUseEffect;
