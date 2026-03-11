'use client';
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

                <Button type="submit" disabled={isSubmitting} className="yellow-btn w-full mt-5">
                    {isSubmitting ? "Creating Account..." : "Start Your Investing Journey"}
                </Button>
            </form>
        </>
    )
}

export default SignUp;