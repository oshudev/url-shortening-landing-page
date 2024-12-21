export async function shortenUrl(longUrl) {
  try {
    const sanitizedUrl = longUrl.trim();
    const encodedUrl = encodeURIComponent(sanitizedUrl);

    const apiUrl =
      import.meta.env.MODE === 'development' ? '/api' : '/api/shorten-url';

    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `url=${encodedUrl}`,
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
