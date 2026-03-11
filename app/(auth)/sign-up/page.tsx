'use client';
import InputField from "@/components/forms/inputField";
import { Button } from "@/components/ui/button";
import {SubmitHandler, useForm} from "react-hook-form";

const SignUp = () => {
    
    const {
        register,
        handleSubmit,
        control,
        formState: { errors , isSubmitting },
    } = useForm<SignUpFormData>({
        defaultValues: {
            fullName: "",
            email: "",
            password: "",
            country: "US",
            investmentGoals: "Growth",
            riskTolerance: "Medium",
            preferredIndustrys: "Technology",
        },
        mode: 'onBlur'
    }, );

    
    const onSubmit =  async (data : SignUpFormData) => {
        try{
            console.log("Form Data:", data);
        }catch(error){
            console.error("Error during sign up:", error);
        }
    }
    
    return (
        <>
            <h1 className="form-title"> Sign Up & Personalize</h1>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                {/* Form fields would go here */}
                <InputField 
                    name="fullName"
                    label="Full Name"
                    placeholder="John Doe"
                    register={register}
                    error={errors.fullName}
                    validation={{ required: "Full name is required", minLength: 2 }}
                />

                <InputField 
                    name="email"
                    label="Email"
                    placeholder="JohnDoe@example.com"
                    register={register}
                    error={errors.email}
                    validation={{ required: "Email is required", pattern: /^\w+@\w+\.\w+$/, message: 'Email address is required'}}
                />

                <InputField 
                    name="password"
                    label="Password"
                    placeholder="••••••••"
                    type="password"
                    register={register}
                    error={errors.password}
                    validation={{ required: "Password is required", minLength: 8 }}
                />

                <Button type="submit" disabled={isSubmitting} className="yellow-btn w-full mt-5">
                    {isSubmitting ? "Creating Account..." : "Start Your Investing Journey"}
                </Button>
            </form>
        </>
    )
}

export default SignUp;