import React from "react";

function Expenses(expenses) {
  return expenses.map((expense) => <div>{expense}</div>);
}

function transformationOfJSX() {
  const expenses = [{}, {}, {}];

  //   return (
  //     <div>
  //       <h2>Some text</h2>
  //       <Expenses items={expenses}/>
  //     </div>
  //   );

  // JSX will always be transformed into that:
  return React.createElement(
    "div",
    React.createElement("h2", {}, "Some text"),
    React.createElement(Expenses, { items: expenses })
  );
}

export default transformationOfJSX;
