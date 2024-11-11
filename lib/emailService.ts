
export const welcomeEmailTemplate = (username: string) => `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            line-height: 1.6;
            margin: 0;
            padding: 0;
            background-color: #f9fafb;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #ffffff;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        .header {
            text-align: center;
            padding: 20px 0;
            border-bottom: 1px solid #e5e7eb;
        }
        .logo {
            font-size: 24px;
            font-weight: bold;
            color: #3b82f6;
            text-decoration: none;
        }
        .content {
            padding: 24px 0;
            text-align: center;
        }
        .highlight {
            color: #3b82f6;
            font-weight: bold;
        }
        .footer {
            text-align: center;
            padding-top: 24px;
            border-top: 1px solid #e5e7eb;
            color: #6b7280;
            font-size: 14px;
        }
        .social-links {
            margin: 16px 0;
        }
        .social-link {
            color: #3b82f6;
            text-decoration: none;
            margin: 0 8px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <a href="https://circle.so" class="logo">Circle</a>
        </div>
        <div class="content">
            <h2>Welcome to Circle! 🎉</h2>
            <p>Hi <span class="highlight">${username}</span>,</p>
            <p>We're thrilled to have you as part of our community! Your account is all set up, and you're ready to dive in.</p>

            <p><strong>Login Information:</strong></p>
            <p>Username: <span class="highlight">${username}</span></p>

            <p><strong>Important:</strong> For your security, please set up a new password when you log in for the first time.</p>

            <p>With Circle, you can:</p>
            <ul>
                <li>Connect with like-minded individuals</li>
                <li>Share insights and experiences</li>
                <li>Engage in lively discussions</li>
                <li>Access exclusive content and events</li>
            </ul>
            <p>See you soon!</p>
        </div>
        
        <div class="footer">
            <div class="social-links">
                <a href="#" class="social-link">Twitter</a>
                <a href="#" class="social-link">LinkedIn</a>
                <a href="#" class="social-link">Instagram</a>
            </div>
            <p>© ${new Date().getFullYear()} Circle. All rights reserved.</p>
            <p>You received this email because you signed up for Circle.</p>
        </div>
    </div>
</body>
</html>
`;