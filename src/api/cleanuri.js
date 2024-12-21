export async function shortenUrl(longUrl) {
  try {
    const response = await fetch('/api', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `url=${encodeURIComponent(longUrl)}`,
    });

    if (!response.ok) {
      return { success: false, error: 'Please add a valid URL' };
    }

    const data = await response.json();
    return { success: true, shortUrl: data.result_url };
  } catch {
    return { success: false, error: 'An error occurred' };
  }
}
