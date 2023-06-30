import { Link, useNavigate } from 'react-router-dom';
import Logo from '../components/common/Logo';
import { Input, Button, message } from 'antd';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { getInputValidations } from '../utils/functions';
import Cookies from "js-cookie";

type LoginFormValues = {
  login: string;
  password: string;
};

export default function Login() {
  const navigate = useNavigate();
	const {
		handleSubmit,
		control,
		formState: { errors },
	} = useForm<LoginFormValues>();

	const loginUser: SubmitHandler<LoginFormValues> = (data: { login: string, password: string }) => {
		if (data.login !== "admin" || data.password !== "password") return message.error("Login or Password is incorrect!");

		Cookies.set("login", "admin");
    navigate("/portal/drivers");
	};

	return (
		<div className="grid place-content-center min-h-screen">
			<div className="w-96 border border-black-2 border-solid rounded-md px-7 py-6 shadow-lg">
				<div className="w-max mx-auto">
					<span className="text-black mb-2 text-lg -ml-7 font-medium">
						Log in to
					</span>
					<Logo size="xl" />
				</div>
				<form
					onSubmit={handleSubmit(loginUser)}
					className="flex flex-col gap-3 mt-5"
				>
					<div>
						<Controller
							control={control}
							name="login"
							rules={getInputValidations(true, 2, 100)}
							render={({ field: { onChange, onBlur, value } }) => (
								<Input
									placeholder="Username"
									size="large"
									onChange={onChange}
									onBlur={onBlur}
									value={value}
									status={errors.login ? 'error' : ''}
								/>
							)}
						/>
						{errors.login && (
							<span className="text-red-600 font-medium text-xs">
								{`${errors.login.message}`}
							</span>
						)}
					</div>
          <div>
						<Controller
							control={control}
							name="password"
							rules={getInputValidations(true, 2, 100)}
							render={({ field: { onChange, onBlur, value } }) => (
								<Input.Password
									placeholder="Password"
									size="large"
									onChange={onChange}
									onBlur={onBlur}
									value={value}
									status={errors.password ? 'error' : ''}
								/>
							)}
						/>
						{errors.password && (
							<span className="text-red-600 font-medium text-xs">
								{`${errors.password.message}`}
							</span>
						)}
					</div>
					<Button htmlType="submit" type="primary" size="large">
						Log In
					</Button>
				</form>
				<Link
					to="/reset-password"
					className="no-underline text-blue mx-auto block w-max mt-6 hover:opacity-70 duration-150"
				>
					Forgot Password
				</Link>
			</div>
		</div>
	);
}
