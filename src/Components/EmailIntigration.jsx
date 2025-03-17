const sendEmail = async () => {
    const response = await fetch('http://localhost:8000/send-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: "John Doe",
        email: "john@example.com",
        contact: "9876543210",
        subject: "Test Email",
        body: "Hello, this is a test email."
      })
    });
    const data = await response.json();
    console.log("Email Response:", data);
  };
  