import { toast } from "sonner";

export const sendEmail = async (emailData: {
  email: string;
  name: string;
  message: string;
}) => {
  try {
    await fetch("/api/send-mail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(emailData),
    });
  } catch (err) {
    toast.error("Oops something bad happened!");
    console.log(err);
  }
};
