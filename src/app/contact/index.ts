export const layouts = [
    {
      id: 1,
      name: 'Style 1',
      template: `
        <div style="background-color: #e0f7fa; padding: 30px; text-align: center;">
          <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; padding: 20px; border-radius: 12px; box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);">
            <div style="padding: 20px 0;">
              <h1 style="font-size: 2.5rem; color: #333;">Thank you for contacting us, {{name}}!</h1>
              <p style="color: #777; font-size: 0.875rem;">Tim's Playground | Started in June 2024 </p>
              <p style="color: #777; font-size: 0.875rem;">{{currentDate}}</p>
            </div>
            <div style="padding: 20px 0;">
              <p style="color: #555; font-size: 1rem;">
                We have received your message and will get back to you as soon as possible.
              </p>
              <p style="color: #555; font-size: 1rem;">
                <strong>Your Email:</strong> {{email}}<br>
                <strong>Your Message:</strong><br>
                "{{message}}"
              </p>
              <p style="color: #007bff; font-size: 1rem;">
                <a href="https://tims-playland.vercel.app/" style="text-decoration: none; color: #007bff;">Playground</a> | 
                <a href="https://github.com/timchen0326" style="text-decoration: none; color: #007bff;">GitHub</a> | 
                <a href="https://www.linkedin.com/in/tim-chen-4b37b1125" style="text-decoration: none; color: #007bff;">LinkedIn</a>
              </p>
            </div>
            <div style="border-top: 1px solid #ddd; padding: 20px 0;">
            </div>
          </div>
        </div>
  `
    },
    {
      id: 2,
      name: 'Style 2',
      template: `
  <div style="background-color: #f0f0f0; padding: 30px; text-align: center;">
    <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; padding: 20px; border-radius: 12px; box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1); border: 10px solid #d9534f; text-align: center;">
      <div style="padding: 20px 0;">
        <p style="color: #d9534f; font-size: 0.875rem; text-transform: uppercase; letter-spacing: 2px; margin: 0;">Get in Touch</p>
        <h1 style="font-size: 2.5rem; color: #333; margin: 10px 0;">Thank you for contacting us, {{name}}!</h1>
      </div>
      <div style="padding: 20px 0;">
        <p style="color: #555; font-size: 1rem;">
          We have received your message and will get back to you as soon as possible.
        </p>
        <p style="color: #555; font-size: 1rem;">
          <strong>Your Email:</strong> {{email}}<br>
          <strong>Your Message:</strong><br>
          "{{message}}"
        </p>
      </div>
      <div style="padding: 20px 0;">
        <a href="https://tims-playland.vercel.app/" style="display: inline-block; margin: 10px 0; padding: 10px 20px; background-color: #d9534f; color: #fff; text-decoration: none; border-radius: 5px; font-size: 1rem;">Playground</a>
        <a href="https://github.com/timchen0326" style="display: inline-block; margin: 10px 0; padding: 10px 20px; background-color: #d9534f; color: #fff; text-decoration: none; border-radius: 5px; font-size: 1rem;">GitHub</a>
        <a href="https://www.linkedin.com/in/tim-chen-4b37b1125" style="display: inline-block; margin: 10px 0; padding: 10px 20px; background-color: #d9534f; color: #fff; text-decoration: none; border-radius: 5px; font-size: 1rem;">LinkedIn</a>
      </div>
      <div style="padding: 20px 0;">
        <p style="color: #777; font-size: 0.875rem; margin: 5px 0;">Tim's Playground | Started in June 2024</p>
        <p style="color: #777; font-size: 0.875rem; margin: 5px 0;">{{currentDate}}</p>
      </div>
    </div>
  </div>
  `
    },
    {
      id: 3,
      name: 'Style 3',
      template: `
        <div style="background-color: #f0f0f0; padding: 30px; text-align: center;">
          <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; padding: 20px; border-radius: 12px; box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);">
            <div style="background-color: #d6f5d6; padding: 20px; border-radius: 12px 12px 0 0;">
              <h1 style="font-size: 1.5rem; color: #333; margin: 10px 0;">Thank you for reaching out, {{name}}!</h1>
              <a href="https://tims-playland.vercel.app/" style="background-color: #333; color: #fff; padding: 10px 20px; text-decoration: none; border-radius: 5px; display: inline-block; margin: 10px 0;">Learn More</a>
            </div>
            <div style="background-color: #ffffff; padding: 20px; text-align: left;">
              <p style="color: #555; font-size: 1rem;">We appreciate your interest and the time you took to contact us. Our team is currently reviewing your message to provide the most accurate and helpful response. Please allow us 24-48 hours to get back to you. In the meantime, if you have any additional details or questions, feel free to reply to this message. We value your patience and look forward to assisting you soon.</p>
            </div>
            <div style="background-color: #d6f5d6; padding: 20px; border-radius: 12px; margin: 20px 0;">
              <h2 style="color: #333; font-size: 1.25rem; margin-bottom: 10px;">Rest assured, we're on it!</h2>
              <p style="color: #333; font-size: 1rem;">We have received your message and are working diligently to respond. Your inquiry is important to us, and we aim to provide a comprehensive answer as quickly as possible.</p>
            </div>
            <div style="background-color: #ffffff; padding: 20px; text-align: left;">
              <p style="color: #555; font-size: 1rem;">
                <strong>Your Email:</strong> {{email}}<br>
                <strong>Your Message:</strong><br>
                "{{message}}"
              </p>
            </div>
            <div style="background-color: #d6f5d6; padding: 20px; border-radius: 0 0 12px 12px; text-align: left;">
              <a href="https://tims-playland.vercel.app/" style="text-decoration: none; color: #007bff; margin-right: 10px;">Playground</a> |
              <a href="https://github.com/timchen0326" style="text-decoration: none; color: #007bff; margin-right: 10px;">GitHub</a> |
              <a href="https://www.linkedin.com/in/tim-chen-4b37b1125" style="text-decoration: none; color: #007bff; margin-right: 10px;">LinkedIn</a>
              <p style="color: #555; font-size: 0.875rem; margin-top: 5px;">&copy; 2024 Tim's Playground. All rights reserved.</p>
            </div>
          </div>
        </div>
  `
    }
  ];