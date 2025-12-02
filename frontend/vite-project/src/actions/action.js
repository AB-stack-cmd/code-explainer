"use server";

export async function action(prevState, formData) {
    const code = formData.get("code");
    const language = formData.get("language");

    try {
        const res = await fetch(
            `${import.meta.env.VITE_API_BASE_URL}api/explain-code`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ code, language }),
            }
        );

        const data = await res.json();
        console.log(data.message)
        console.log(data.data)


        console.log(prevState.data.explanation)

        return data;



    } catch (err) {
        console.log(err);
        return {
            success: false,
            error: "Backend not reachable",
        };
    }
}
