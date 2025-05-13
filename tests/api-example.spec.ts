import { test, expect, request } from '@playwright/test';

test('JSONPlaceholderのユーザーAPIにGETできる', async () => {
  const apiContext = await request.newContext(); // 新しいAPIクライアントを作成

  const response = await apiContext.get('https://jsonplaceholder.typicode.com/users/1');

  // ステータスコードが200であることを確認
  expect(response.status()).toBe(200);

  // JSONの中身を確認（例：名前が "Leanne Graham"）
  const data = await response.json();
  expect(data.name).toBe('Leanne Graham');
});
