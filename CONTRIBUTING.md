# Contributing to EliTech CreaTives Website

First off, thank you for considering contributing to the EliTech CreaTives website! 🎉

This document provides guidelines and instructions for contributing to this project.

---

## 📋 Code of Conduct

We are committed to providing a welcoming and inspiring community for all. Please be respectful of others and maintain professionalism in all interactions.

---

## How Can I Contribute?

### 1. **Report Bugs** 🐛
If you find a bug, please open a GitHub Issue with:
- Clear description of the issue
- Steps to reproduce
- Expected vs. actual behavior
- Browser and OS information
- Screenshots if applicable

**Example:**
```
Title: Newsletter form not submitting on mobile
Description: When I try to submit the newsletter form on my iPhone, 
it shows an error modal instead of submitting.
Browser: Safari 14.1 on iOS 14.5
Steps: 1. Open site on iPhone, 2. Scroll to newsletter, 3. Enter email, 4. Click submit
```

### 2. **Suggest Features** ✨
Have an idea? Open an Issue with:
- Clear description of the feature
- Why you think it would be useful
- Possible implementation approach
- Wireframes or mockups (if applicable)

**Example:**
```
Title: Add dark/light theme toggle
Description: A theme toggle would allow users to switch between dark 
and light modes based on their preference.
Use case: Users with light-sensitive eyes might prefer light mode
Implementation: Add toggle button in navbar, use CSS variables
```

### 3. **Submit Pull Requests** 🔧
Ready to code? Follow the process below.

---

## 🚀 Development Workflow

### Setup Development Environment

1. **Fork the repository**
   ```bash
   # Click "Fork" button on GitHub
   ```

2. **Clone your fork**
   ```bash
   git clone https://github.com/YOUR_USERNAME/elitech-creatives.git
   cd elitech-creatives
   ```

3. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b bugfix/your-bug-fix
   ```

4. **Make your changes**
   - Edit HTML, CSS, or JavaScript files
   - Keep changes focused and atomic
   - Test thoroughly in browser

5. **Test your changes**
   ```bash
   # Open index.html in browser or use local server
   python -m http.server 8000
   # Visit http://localhost:8000
   ```

6. **Commit your changes**
   ```bash
   git add .
   git commit -m "feat: add feature description here"
   ```

   **Commit message format:**
   - `feat:` for new features
   - `fix:` for bug fixes
   - `docs:` for documentation
   - `style:` for styling changes
   - `refactor:` for code restructuring
   - `test:` for tests
   - `chore:` for maintenance

   **Example:**
   ```bash
   git commit -m "feat: add dark mode toggle to navbar"
   git commit -m "fix: resolve mobile menu closing issue"
   git commit -m "docs: update form setup instructions"
   ```

7. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```

8. **Open a Pull Request**
   - Go to GitHub and click "New Pull Request"
   - Select your feature branch
   - Fill in PR description:
     - What changes does this make?
     - Why are these changes needed?
     - How can reviewers test this?
     - Closes #(issue number)

---

## 📝 Pull Request Guidelines

### Before Submitting:

1. **Test thoroughly**
   - Desktop browser (Chrome, Firefox, Safari)
   - Mobile browsers (iOS Safari, Chrome Mobile)
   - Test at multiple screen sizes (480px, 640px, 1024px)

2. **Check mobile responsiveness**
   - Use DevTools device toolbar
   - Test hamburger menu
   - Verify touch interactions

3. **Validate accessibility**
   - Tab through all interactive elements
   - Check for keyboard navigation
   - Verify semantic HTML structure

4. **Update documentation**
   - Update README.md if necessary
   - Add comments to complex code
   - Document any new configuration

5. **Follow code style**
   - Consistent indentation (2 spaces)
   - Meaningful variable names
   - Remove unused code
   - No console errors

6. **Keep commits clean**
   - Logical, focused commits
   - Descriptive commit messages
   - Squash work-in-progress commits

### PR Template:

```markdown
## 📝 Description
Brief description of changes

## 🎯 Related Issue
Closes #123

## 📋 Type of Change
- [ ] Bug fix (non-breaking fix)
- [ ] New feature (non-breaking addition)
- [ ] Breaking change
- [ ] Documentation update

## ✅ Testing
- [ ] Tested on desktop
- [ ] Tested on mobile
- [ ] Form submissions tested
- [ ] All responsive breakpoints tested

## 🔍 Checklist
- [ ] Code follows style guidelines
- [ ] Comments added for complex logic
- [ ] Documentation updated
- [ ] No new console warnings/errors
- [ ] CSS/HTML is valid

## 📸 Screenshots (if applicable)
[Add screenshots showing changes]
```

---

## 🌳 Project Structure

```
elitech/
├── index.html          # Main HTML structure
├── styles.css          # All styling
├── README.md           # Main documentation
├── LICENSE             # MIT License
├── .gitignore          # Git ignore rules
├── CONTRIBUTING.md     # This file
├── FORMSPREE_SETUP.md  # Form setup guide
└── assets/
    ├── EliTech.png     # Favicon
    ├── eli.png         # Founder photo
    ├── andy.png        # Co-founder photo
    ├── PLAT.jpg        # Product image
    └── veylo1.jpg      # Product image
```

---

## 💻 Code Style Guidelines

### HTML
```html
<!-- Use semantic HTML -->
<button class="btn primary">Submit</button>
<nav aria-label="Primary">...</nav>

<!-- Consistent indentation (2 spaces) -->
<div class="section">
  <h2>Title</h2>
  <p>Content</p>
</div>

<!-- Use meaningful class names -->
<div class="hero-copy">...</div>  <!-- Good -->
<div class="hc">...</div>         <!-- Bad -->
```

### CSS
```css
/* Use CSS variables for consistency */
color: var(--text-main);
background: var(--accent);

/* Group related properties */
.button {
  display: flex;
  align-items: center;
  justify-content: center;
  
  padding: 12px 24px;
  border-radius: 14px;
  
  background: var(--accent);
  transition: all 0.3s ease;
}

/* Use meaningful class names */
.product-card { }        /* Good */
.pc { }                  /* Bad */

/* Mobile-first approach */
@media (max-width: 640px) {
  /* Mobile styles here */
}
```

### JavaScript
```javascript
// Use meaningful variable names
const toggleMenu = () => {
  // Logic here
};

// Use const/let, avoid var
const formElement = document.getElementById('form-id');
let isOpen = false;

// Add comments for complex logic
// Toggle menu open state and update aria attribute
const toggleMenu = () => {
  if (!header || !menuToggle) return;
  const isOpen = header.classList.toggle("menu-open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
};
```

---

## 🎨 Design Guidelines

### Colors
- Use CSS variables defined in `:root`
- **Accent**: `#f6a200` (Gold)
- **Primary Blue**: `#5f78d6`
- **Text Main**: `#f4f5f7`
- **Text Muted**: `#c4cad2`
- **Background**: `#0b0f14` (Dark)

### Typography
- **Display**: Space Grotesk (headings)
- **Body**: Manrope (paragraphs) 

### Spacing
- Base unit: 4px increments
- 8px, 12px, 16px, 20px, 24px, etc.

### Border Radius
- Small: 10px
- Medium: 14px - 18px
- Large: 20px - 22px
- Pill: 999px

### Animations
- Hover transitions: 0.2-0.3s
- Page load animations: 0.6-0.8s
- Easing: cubic-bezier(0.23, 1, 0.320, 1)

---

## 📱 Testing Requirements

Before submitting a PR, test:

### Browsers
- [ ] Chrome latest
- [ ] Firefox latest
- [ ] Safari latest
- [ ] Edge latest
- [ ] Mobile Chrome
- [ ] Mobile Safari

### Responsive Breakpoints
- [ ] 480px (extra small)
- [ ] 640px (small)
- [ ] 1024px (medium)
- [ ] 1366px (large)

### Features
- [ ] Forms submit correctly
- [ ] Animations play smoothly
- [ ] Images load properly
- [ ] Links navigate correctly
- [ ] Accessibility features work
- [ ] No console errors
- [ ] Page loads at reasonable speed

---

## 🔐 Security Considerations

When contributing, please ensure:

1. **No sensitive data** in commits
   - No API keys, secrets, or passwords
   - No private email addresses
   - No auth tokens

2. **Form security**
   - Always use HTTPS
   - Never hardcode form endpoints
   - Use environment variables for prod

3. **Input validation**
   - Validate all form inputs
   - Sanitize user data
   - Use appropriate input types

4. **Accessibility**
   - Include ARIA labels
   - Ensure keyboard navigation
   - Respect prefers-reduced-motion

---

## 📚 Resources

### Documentation
- [MDN Web Docs](https://developer.mozilla.org/)
- [CSS-Tricks](https://css-tricks.com/)
- [Web Accessibility](https://www.w3.org/WAI/)

### Tools
- [Chrome DevTools](https://developer.chrome.com/docs/devtools/)
- [WAVE Accessibility Checker](https://wave.webaim.org/)
- [CSS Validator](https://jigsaw.w3.org/css-validator/)
- [HTML Validator](https://validator.w3.org/)

### Inspiration
- [Dribbble](https://dribbble.com/)
- [Awwwards](https://www.awwwards.com/)
- [CodePen](https://codepen.io/)

---

## 🤝 Community

We appreciate all contributions! Some ways to get involved:

- 💬 **Join discussions** - Chat about features and improvements
- 📝 **Write documentation** - Help others understand the project
- 🐛 **Report bugs** - Help us find and fix issues
- ✨ **Share ideas** - Suggest features and improvements
- 🎨 **Design improvements** - Enhance the UI/UX

---

## 📞 Questions?

- 📧 Email: contact@elitech.studio
- 💬 Open a Discussion on GitHub
- 🔗 Check existing Issues and PRs

---

## ✨ Contributors

Thank you to everyone who has contributed to this project!

---

**Last Updated**: February 2026  
**Made with ❤️ by EliTech CreaTives**
