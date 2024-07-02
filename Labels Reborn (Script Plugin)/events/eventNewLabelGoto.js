export const id = "EVENT_GOTO_LABEL_REBORN";

export const name = "Go To Label";
export const groups = ["Labels Reborn"];

export const fields = [
  {
    key: "label",
    label: "Label: Goto",
    type: "text",
  },
];

export const compile = (input, helpers) => {
  const { labelGoto } = helpers;
  labelGoto(input.label);
};

module.exports = {
  id,
  name,
  groups,
  fields,
  compile,
};
