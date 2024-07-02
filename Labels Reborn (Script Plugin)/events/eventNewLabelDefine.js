export const id = "EVENT_DEFINE_LABEL_REBORN";

export const name = "Define Label";
export const groups = ["Labels Reborn"];

export const fields = [
  {
    key: "label",
    label: "Label: Define",
    type: "text",
  },
];

export const compile = (input, helpers) => {
  const { labelDefine } = helpers;
  labelDefine(input.label);
};

module.exports = {
  id,
  name,
  groups,
  fields,
  compile,
};
