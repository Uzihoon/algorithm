/**
I B C A L K A
D R F C A E A
G H O E L A D 
 */

// Start from left top most to diagnoal way untill hit the bottom

function decod(message) {
  let i = 0;
  let j = 0;
  let dir = 1;
  let decoded = '';

  const cols = message[0]?.length;

  while (j < cols) {
    decoded += message[i][j];
    if (!message[i + dir]) {
      dir *= -1;
    }

    i += dir;
    j += 1;
  }

  return decoded;
}
