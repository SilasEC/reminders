# Reminders

**Reminders** is a web application that helps users manage their reminders with ease. The app allows users to create, reschedule, and delete reminders. Designed to be decoupled and modular, it provides a clean interface and ensures users can set reminders by a specific time. This app is built with React and supports various features, including a testing suite to ensure functionality.

## Features

- **Create Reminders**: Users can create a new reminder with a specified time for when they need to be reminded.
- **Reschedule Reminders**: Users can modify the date and time of existing reminders.
- **Delete Reminders**: Users have the option to delete any reminders they no longer need.
- **Test Suite**: The project includes a passing test suite with at least 3 non-trivial tests to ensure that core functionality works as expected.

## Extensions

- **Calendar Widget Integration**: Added a React Calendar widget for selecting reminder dates, improving user experience.
- **100% Test Coverage**: The project ensures complete test coverage of the code to maintain high code quality and reliability.

## Requirements

To get started with the Reminders app, make sure you have the following installed:

- **Node.js**: Version 14 or higher
- **npm**: Version 6 or higher

## Installation

1. Clone this repository:
    ```bash
    https://github.com/SilasEC/reminders.git
    ```
2. Navigate to the project folder:
    ```bash
    cd reminders
    ```
3. Install dependencies:
    ```bash
    npm install
    ```

4. Run the development server:
    ```bash
    npm start
    ```

Your app will be available at `http://localhost:3000`.

## Testing

To run the test suite:

```bash
cd backend
coverage run manage.py test
coverage report
```

## Contact

If you encounter any issues or have any questions, please open an issue in the [GitHub repository](https://github.com/SilasEC/reminders/issues).
