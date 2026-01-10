# Testing Practice

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![The Odin Project](https://img.shields.io/badge/The%20Odin%20Project-Lesson-red)](https://www.theodinproject.com/)

> A hands-on exploration of Test-Driven Development (TDD) using Jest as part of The Odin Project curriculum. This repository documents my learning journey through writing comprehensive unit tests for various JavaScript functions.

## 📋 Table of Contents

- [Testing Practice](#testing-practice)
  - [📋 Table of Contents](#-table-of-contents)
  - [✨ Features](#-features)
  - [🚀 Getting Started](#-getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
    - [Running Tests](#running-tests)
  - [💡 Future Improvements](#-future-improvements)
  - [📚 What I Learned](#-what-i-learned)
  - [🛠️ Technologies Used](#️-technologies-used)
  - [🔗 Resources](#-resources)
  - [🙏 Acknowledgments](#-acknowledgments)

## ✨ Features

- **String Utilities** - capitalize() and reverseString() functions with full test coverage
- **Calculator Object** - Basic arithmetic operations (add, subtract, multiply, divide) with comprehensive tests
- **Caesar Cipher** - Character shifting cipher with case preservation and wrapping logic
- **Array Analysis** - Statistical analysis function returning average, min, max, and length
- **Test-Driven Development** - All functions implemented using TDD methodology with Jest

## 🚀 Getting Started

Want to run this project locally? Here's how:

### Prerequisites

- Node.js (version 14 or higher)
- npm (comes with Node.js)
- Basic understanding of JavaScript and unit testing

### Installation

1. Clone the repository

```bash
   git clone https://github.com/top-submissions/fullstackjs-testing-practice.git
   cd fullstackjs-testing-practice
```

1. Install dependencies

```bash
   npm install
```

1. Verify installation

```bash
   npm test
```

### Running Tests

Run all tests:

```bash
npm test
```

Run tests in watch mode:

```bash
npm test -- --watch
```

Run tests with coverage:

```bash
npm test -- --coverage
```

## 💡 Future Improvements

If I were to continue working on this project, here's what I'd add:

- [ ] Add edge case tests for division by zero
- [ ] Implement integration tests for combined function usage
- [ ] Add performance benchmarks for array analysis with large datasets
- [ ] Implement additional cipher algorithms (ROT13, Vigenère)
- [ ] Add TypeScript support with type definitions
- [ ] Create visual test coverage reports
- [ ] Add continuous integration with GitHub Actions
- [ ] Implement property-based testing with fast-check

## 📚 What I Learned

- **Test-Driven Development** - Writing tests first helps clarify requirements and leads to better code design
- **Jest Framework** - Mastered Jest's testing syntax, matchers, and test organization with describe/test blocks
- **Edge Case Handling** - Importance of testing boundary conditions, empty inputs, and invalid data
- **Code Coverage** - Understanding what code coverage metrics mean and how to achieve comprehensive test coverage
- **Modular Design** - Structuring code into small, testable functions with single responsibilities
- **Array Methods** - Leveraging reduce(), map(), and spread operators for elegant solutions
- **Character Encoding** - Working with character codes and ASCII values for the Caesar cipher implementation

## 🛠️ Technologies Used

- **Jest** - JavaScript testing framework
- **Babel** - JavaScript transpiler for ES6+ support
- **Node.js** - JavaScript runtime environment
- **ES6 Modules** - Modern JavaScript module system

## 🔗 Resources

- [Jest Documentation](https://jestjs.io/docs/getting-started)
- [The Odin Project - Testing Basics](https://www.theodinproject.com/lessons/node-path-javascript-testing-basics)
- [The Odin Project - Testing Practice](https://www.theodinproject.com/lessons/node-path-javascript-testing-practice)
- [MDN - Array Methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

## 🙏 Acknowledgments

- **The Odin Project** - For providing an amazing free curriculum

---

<div align="center">

Built with 💡 and ☕ as part of my journey through <a href="https://www.theodinproject.com/">The Odin Project</a>

</div>
