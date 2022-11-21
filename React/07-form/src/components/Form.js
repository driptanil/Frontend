import { useForm } from "react-hook-form";
// useForm hook is for taking user input

import * as yup from "yup";
// YUP is used for validation of user input

import { yupResolver } from "@hookform/resolvers/yup";
// yupResolver is used to apply the yap rules to the useForm hook

export const Form = () => {
	const schema = yup.object().shape({
		// adding shapes to `yup` object

		name: yup.string().required("Your full-name is Required !"),
		// Shows custom error message

		email: yup
			.string()
			.email("Your email is Invalid !")
			.required("Your email is Required !"),
		age: yup
			.number("Your age must be number !")
			.positive("Your age must be Positive !")
			.integer("Your age must be Integer !")
			.min(19, "Your age must be above 18 years !")
			.required("Your age is required !"),
		password: yup
			.string()
			.min(4, "Your password must have minimum 4 characters !")
			.max(20, "Your password must have maximum 20 characters !")
			.required("Your password is required !"),
		confirmPassword: yup
			.string()
			.equals([yup.ref("password"), null], "Password doesn't Match !")
			.required("Confirmation of your password is required !"),
		// `equals` checks `password` === `confirmPassword`
	});
	// yup is used to layout rules for user input

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
		// `useForm` sets resolver to be the `yupResolver`
		// `yupResolver` takes yup object as the parameter
	});

	const onSubmit = (data) => {
		console.log(data);
	};

	return (
		<div>
			<h1>User Form</h1>
			<form onSubmit={handleSubmit(onSubmit)}>
				<input
					type="text"
					placeholder="Full Name ..."
					{...register("name")}
					// `useForm` -> `register` is used add key to different user input
				></input>
				<div className="error">{errors.name?.message}</div>

				<input
					type="email"
					placeholder="Email ..."
					{...register("email")}></input>
				<div className="error">{errors.email?.message}</div>

				<input
					type="number"
					placeholder="Age ..."
					{...register("age")}></input>
				<div className="error">{errors.age?.message}</div>

				<input
					type="password"
					placeholder="Password ..."
					{...register("password")}></input>
				<div className="error">{errors.password?.message}</div>

				<input
					type="password"
					placeholder="Confirm Password ..."
					{...register("confirmPassword")}></input>
				<div className="error">{errors.confirmPassword?.message}</div>

				<input type="submit"></input>
			</form>
		</div>
	);
};
