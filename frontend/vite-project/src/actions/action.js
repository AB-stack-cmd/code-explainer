"use server";

export async function action(prevState, formData) {
    const code = formData.get("code");
    const language = formData.get("language");

    try {
        const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}api/explain-code`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ code, language }),
            });

        if (!res.ok) {
            return {
                success: false,
                error: `Backend returned status ${res.status}`,
            };
        }

        const data = await res.json();

        console.log(data.success);
        console.log(data.data)
        console.log(data.data.explanation)

        return data;



    } catch (err) {
        return {
            success: false,
            error: "Unable to fetch Backend"
        }
    }
}