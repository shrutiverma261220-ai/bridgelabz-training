function minWindow(s, t) {
    if (t.length > s.length) return "";

    let freq = {};
    for (let ch of t) {
        freq[ch] = (freq[ch] || 0) + 1;
    }

    let left = 0, right = 0;
    let count = t.length;
    let minLen = Infinity;
    let start = 0;

    while (right < s.length) {
        if (freq[s[right]] > 0) {
            count--;
        }
        freq[s[right]] = (freq[s[right]] || 0) - 1;
        right++;

        while (count === 0) {
            if (right - left < minLen) {
                minLen = right - left;
                start = left;
            }

            freq[s[left]]++;
            if (freq[s[left]] > 0) {
                count++;
            }
            left++;
        }
    }

    return minLen === Infinity ? "" : s.substring(start, start + minLen);
}
