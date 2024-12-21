export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res
      .status(405)
      .json({ success: false, error: 'Method Not Allowed' });
  }

  const { url } = req.body;

  if (!url) {
    return res.status(400).json({ success: false, error: 'URL is required' });
  }

  try {
    const apiUrl = 'https://cleanuri.com/api/v1/shorten';
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `url=${encodeURIComponent(url)}`,
    });

    if (!response.ok) {
      return res
        .status(500)
        .json({ success: false, error: 'Failed to shorten URL' });
    }

    const data = await response.json();
    return res.status(200).json({ success: true, result_url: data.result_url });
  } catch {
    return res.status(500).json({
      success: false,
      error: 'An error occurred while shortening the URL',
    });
  }
}
