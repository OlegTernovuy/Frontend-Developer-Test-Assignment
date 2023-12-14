import * as yup from "yup";

export const ValidationsSchema = yup.object().shape({
  name: yup
    .string()
    .required("Required")
    .min(2, "Name must be more than 2 characters")
    .max(60, "Name must be less than 60 characters"),
  email: yup
    .string()
    .required("Required")
    .email()
    .min(2, "Email must be more than 2 characters")
    .max(100, "Email must be less than 100 characters")
    .matches(
      /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/,
      "User email, must be a valid email according to RFC2822"
    ),
  phone: yup
    .string()
    .required("Required")
    .matches(/^[\+]{0,1}380/, "Number should start with code of Ukraine +380")
    .matches(/^[\+]{0,1}380([0-9]{9})$/, "And contain 9 numbers"),
  position_id: yup.number().required("Required").integer(),
  photo: yup
    .mixed()
    .required("Required")
    .test("fileSize", "The file is too large", (files: any) => {
      return files && files.size <= 500000;
    })
    .test("type", "We only support jpeg or jpg", (files: any) => {
      return files && files.type === ("image/jpeg" || "image/jpg");
    }),
});
