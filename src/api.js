const registerUser = async (email, password) => {
    try {
        const response = await fetch("http://localhost:8080/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Cache-Control": "no-cache", // Menonaktifkan cache
            },
            body: JSON.stringify({ email, password }),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log("User registered successfully:", data);
        alert("Registration successful!");
    } catch (error) {
        console.error("Error during registration:", error);
        alert("Registration failed!");
    }
};
