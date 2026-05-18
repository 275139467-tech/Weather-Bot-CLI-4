import ora from 'ora';

export async function withSpinner(message, task) {
  const spinner = ora(message).start();
  try {
    const result = await task();
    spinner.succeed();
    return result;
  } catch (error) {
    spinner.fail(error.message);
    throw error;
  }
}
