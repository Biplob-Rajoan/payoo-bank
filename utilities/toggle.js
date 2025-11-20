// Hide cashout section initially
document.getElementById('cashout').style.display = 'none';

document.getElementById('add-money-box').addEventListener('click', function() {
    handleToggle('add-money', 'block'); // FIXED
    handleToggle('cashout', 'none');
});

document.getElementById('cashout-box').addEventListener('click', function() {
    handleToggle('cashout', 'block');
    handleToggle('add-money', 'none'); // FIXED
});

function handleToggle(id, status) {
    document.getElementById(id).style.display = status;
}
