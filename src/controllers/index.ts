import 'source-map-support/register';

export const hello = async (_context) => {
  const time = new Date();
  console.log(`Your cron function "${_context.functionName}" ran at ${time}`);
}
