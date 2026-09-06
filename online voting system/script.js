document.getElementById('voteForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const selected = document.querySelector('input[name="candidate"]:checked');

    if (selected) {
        document.getElementById('resultMessage').textContent =
            `Thank you for voting for ${selected.value}!`;
    } else {
        document.getElementById('resultMessage').textContent =
            "Please select a candidate before submitting.";
    }
});
