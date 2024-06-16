import axios from "axios";
import { API_URL } from "@/constants";

export async function submitFeedbackForm({
  full_name,
  email,
  comment,
  phone,
  attachment_file,
}) {
  try {
    const fd = new FormData();

    fd.append("full_name", full_name);
    fd.append("email", email);
    fd.append("comment", comment);
    fd.append("phone", phone);
    fd.append("attachment_file", attachment_file);

    await axios.post(`${API_URL}/feedback_form/send_to_email/`, fd, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  } catch (err) {
    console.log(err);
    return [false, "Ошибка при отправке формы!"];
  }

  return [true, "Форма отправлена!"];
}
