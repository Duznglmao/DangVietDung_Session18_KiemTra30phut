let persons = [];
let Id = 0;
let addBtn = document.querySelector(".btn-add");
let form = document.getElementById("contact-form");
let tbody = document.getElementById("contact-tbody");

addBtn.addEventListener("click", () => {
    let contactName = document.getElementById("contact-name").value.trim();
    let contactPhone = document.getElementById("contact-phone").value.trim();
    let contactEmail = document.getElementById("contact-email").value.trim();

    if (contactName === "" || contactPhone === "" || contactEmail === "") {
        return alert("Vui lòng điền đẩy đủ thông tin!");
    }
    if (contactName.length < 2) {
        return alert("Họ tên phải có ít nhất 2 ký tự!");
    }

     if (contactPhone.length < 10) {
        return alert("Số điện thoại phải có ít nhất 10 ký tự!");
    }

    let isExist = persons.some(person => person.email === contactEmail);
    if (isExist) {
        return alert("Email đã tồn tại trong danh bạ!");
    }

    let person = {
        id: Id + 1,
        name: contactName,
        phone: contactPhone,
        email: contactEmail
    };

    persons.push(person);

    renderTable();

    alert("Thêm liên hệ thành công!");
    form.reset();
});

function renderTable() {
    let str = "";
    for (let i = 0; i < persons.length; i++) {
        str += `
        <tr>
            <td>${i + 1}</td>
            <td>${persons[i].name}</td>
            <td>${persons[i].phone}</td>
            <td>${persons[i].email}</td>
            <td>
                <div class="action-buttons">
                    <button class="btn-edit">Sửa</button>
                    <button class="btn-delete">Xóa</button>
                </div>
            </td>
        </tr>`;
    }
    tbody.innerHTML = str;
}