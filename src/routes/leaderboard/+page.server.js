export const load = () => {
    return {
        streams: {leaderboard: fetch("http://localhost:4040/leaderboard")
        .then((r) => r.json())}
    }
}