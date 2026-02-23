# Formspree Integration Setup Guide

## Quick Setup (5 minutes)

This guide explains how to connect your Formspree account to activate the careers application and newsletter forms.

---

## 📋 Prerequisites

- Email address (for receiving form submissions)
- Free Formspree account or Pro plan
- Text editor or IDE

---

## Step 1: Create Formspree Account

1. Visit [formspree.io](https://formspree.io)
2. Click **"Get Started"** or **"Sign Up"**
3. Choose your signup method:
   - Email + Password
   - Google Account
   - GitHub Account
4. Complete email verification

---

## Step 2: Create New Form Project

### Via Web Dashboard:
1. Log in to Formspree
2. Click **"New Project"** or **"Add Form"**
3. Name: `Elitech Careers` or `Elitech Newsletter`
4. Email: Your email address to receive submissions
5. Click **Create**

### Via Quick Setup:
1. You'll see your form endpoint
2. Copy the entire URL (looks like): `https://formspree.io/f/abcd1234`

---

## Step 3: Update HTML Form

### For Careers Application Form

**Location**: `index.html` (Line ~420)

**Find this:**
```html
<form class="careers-form" action="#" method="post" id="careers-form">
```

**Replace with:**
```html
<form class="careers-form" action="https://formspree.io/f/YOUR_FORM_ID" method="post" id="careers-form">
```

**Example:**
```html
<form class="careers-form" action="https://formspree.io/f/xyzabc123" method="post" id="careers-form">
```

### For Newsletter Form

**Location**: `index.html` (Line ~450)

**Find this:**
```html
<form class="connect-form" action="#" method="post">
```

**Replace with:**
```html
<form class="connect-form" action="https://formspree.io/f/YOUR_NEWSLETTER_ID" method="post">
```

---

## Step 4: Test the Form

1. Save your changes to `index.html`
2. Open the website in your browser
3. Scroll to **"Join Our Team"** section
4. Fill out the careers form with test data:
   - Full Name: `Test User`
   - Email: `test@example.com`
   - Role: `Design`
   - Message: `Test submission`
5. Click **"Submit Application →"**

**Expected Results:**
- ✅ A modal appears: **"Submitted - Thanks for applying..."**
- ✅ You receive an email at your Formspree address
- ✅ Response email from Formspree confirming submission

---

## Step 5: Verify Email & Confirmation

1. Check your email inbox
2. Look for email from `forms@formspree.io` or `submissions@formspree.io`
3. Click any confirmation links if needed
4. View your submissions on Formspree dashboard

---

## Form Fields Explanation

### Careers Form Fields:
```
- Full Name (required) - Applicant's name
- Email Address (required) - Contact email
- Select Role Interest (required) - Product/Design/Engineering/Growth
- Why do you want to join (required) - Max 500 characters
- Key Skills (optional) - Comma-separated list
- Upload CV/Resume (required) - File upload
- Portfolio Link (optional) - URL
- LinkedIn/GitHub Profile (required) - URL
```

### Newsletter Form Fields:
```
- Email (required) - Subscriber email
```

---

## Email Configuration

### Set Reply-To Address (Optional)

1. Formspree Dashboard → Your Form → Settings
2. Look for **"Reply-to Email"**
3. Set to your business email
4. Replies will be sent to that address

### Set Confirmation Email (Optional)

1. Go to Form Settings
2. Enable **"Confirmation Email"**
3. Customize the message sent to applicants

---

## Advanced Configuration

### Add Custom Fields

To add more fields, add them to the form in `index.html`:

```html
<label>
  <span>Custom Field</span>
  <input type="text" name="custom_field" placeholder="Your input" />
</label>
```

Formspree automatically captures all `name` attributes.

### File Upload Configuration

The resume file input is already configured:
```html
<input type="file" name="resume" />
```

**Supported formats:**
- PDF, DOC, DOCX
- Images: JPG, PNG, GIF
- Max file size: 25MB (free plan)

### CAPTCHA Protection (Optional)

For spam prevention:

1. Enable CAPTCHA in Formspree Settings
2. Copy the CAPTCHA code snippet
3. Add to your form before the submit button

---

## Testing Checklist

- [ ] Formspree account created
- [ ] Form endpoint URL copied
- [ ] HTML updated with form endpoint
- [ ] Website saved and refreshed
- [ ] Test form submission completed
- [ ] Received test email in inbox
- [ ] Modal confirmation appeared
- [ ] Form errors cleared (if any)
- [ ] Newsletter form tested
- [ ] All fields working correctly

---

## Troubleshooting

### Form Not Submitting?

**Problem**: Clicking submit does nothing
**Solution**:
- Clear browser cache (Ctrl+Shift+Delete)
- Check browser console (F12) for errors
- Verify form action URL is correct
- Ensure URL starts with `https://`
- Check Formspree dashboard for error logs

### Not Receiving Emails?

**Problem**: Form submits but no email received
**Solution**:
- Check spam/junk folder
- Verify email address in Formspree settings
- Log into Formspree dashboard to see submissions
- Check form endpoint in HTML matches dashboard
- Wait 1-2 minutes, emails may be delayed

### Modal Shows "Form not connected"

**Problem**: Modal says "Add your Formspree action URL to submit"
**Solution**:
- The form action is set to `#`
- Update it with your actual Formspree endpoint
- Refresh the page and test again

### 403/405 Errors?

**Problem**: Console shows 403 or 405 errors
**Solution**:
- Verify method is POST: `method="post"`
- Check URL format is correct
- Ensure HTTPS (not HTTP)
- Try creating a new form endpoint in Formspree

### Old Submissions Showing?

**Problem**: Test submissions are in your inbox
**Solution**:
- Delete from Formspree dashboard
- Or move to spam, they're harmless
- These won't affect production

---

## Best Practices

### Security
- ✅ Always use HTTPS endpoints
- ✅ Don't commit sensitive form IDs to public repos
- ✅ Use `.env` files for production
- ✅ Enable CAPTCHA for public forms
- ✅ Monitor spam submissions

### User Experience
- ✅ Show success modal (already implemented)
- ✅ Add loading state (already implemented)
- ✅ Validate required fields (already implemented)
- ✅ Show error messages clearly (already implemented)
- ✅ Redirect to thank you page (optional)

### Maintenance
- ✅ Check submissions regularly
- ✅ Respond to applications quickly
- ✅ Archive old forms periodically
- ✅ Update contact info if needed
- ✅ Monitor spam patterns

---

## Deployment Considerations

### Environment Variables

For production, store your form IDs in environment variables:

**Create `.env` file:**
```
VITE_CAREERS_FORM=https://formspree.io/f/xxx
VITE_NEWSLETTER_FORM=https://formspree.io/f/yyy
```

**Never commit `.env` to GitHub!**

### Vercel Deployment

1. Push code to GitHub
2. Connect repo to Vercel
3. Add environment variables in Vercel Settings
4. Deploy - forms work automatically

### Netlify Deployment

1. Connect GitHub to Netlify
2. Add environment variables in Build & Deploy → Environment
3. Deploy - forms work automatically

---

## Formspree Plan Comparison

| Feature | Free | Plus | Premium |
|---------|------|------|---------|
| Monthly Submissions | 50 | 300 | Unlimited |
| Email Submissions | ✅ | ✅ | ✅ |
| File Uploads | ✅ | ✅ | ✅ |
| Custom Domain | ❌ | ✅ | ✅ |
| CAPTCHA | ❌ | ✅ | ✅ |
| Webhooks | ❌ | ❌ | ✅ |
| Admin Console | ❌ | ✅ | ✅ |
| Support | Community | Priority | Priority |
| Cost | $0 | $20/mo | $99/mo |

For a student-led studio, **Free or Plus plan** should be sufficient.

---

## Further Resources

- [Formspree Documentation](https://formspree.io/docs/getting-started/)
- [Formspree Status Page](https://status.formspree.io/)
- [Formspree Community](https://community.formspree.io/)
- [HTML Form Best Practices](https://developer.mozilla.org/en-US/docs/Learn/Forms)

---

## Support

### For Formspree Issues:
- 📧 Contact: support@formspree.io
- 💬 Community: community.formspree.io
- 📚 Docs: formspree.io/docs

### For Website Issues:
- 📝 Check README.md troubleshooting section
- 🐛 Open GitHub Issue
- 💬 Contact: contact@elitech.studio

---

## Quick Reference

### Form Endpoints at a Glance

```
Careers Form:     https://formspree.io/f/[YOUR_ID_HERE]
Newsletter Form:  https://formspree.io/f/[YOUR_ID_HERE]
```

### HTML Update Template

```html
<!-- Careers Form -->
<form class="careers-form" 
      action="https://formspree.io/f/YOUR_FORM_ID" 
      method="post" 
      id="careers-form">

<!-- Newsletter Form -->
<form class="connect-form" 
      action="https://formspree.io/f/YOUR_FORM_ID" 
      method="post">
```

---

**Last Updated**: February 2026  
**Made with ❤️ by EliTech CreaTives**
