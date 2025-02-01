Todo: 
Replace customers -> students

Timer {
    Update Timeblocks,
    space for nametags,
    fetch attendance
}

Attendance {
    search,
    scan student,
    manual removal/add

    table {
        student id
    }
}

Students {
    search
    add/remove/edit
        id,
        name,
        email,
        username,
        password,
        belt,
        level,
        points,
        dob,
        studentNumber,
        nametagImageSrc => shopitem.src,
        icon => shopitem.src

    inventory {
        id => shop item
        date purchased,
    }
}

Products {
    search
    add/remove/edit
        id,
        name,
        description,
        image src,
        price,
        category => item-category
}

Product-Category {
    id,
    name
}