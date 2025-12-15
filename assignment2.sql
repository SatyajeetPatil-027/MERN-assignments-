select * from courses
    where start_date > current_timestamp;


select S.reg_no, S.name, S.email,S.course_id,S.mobile_no,C.course_name from student S
     join courses C on S.course_id = C.course_id;



 select * from student S
    left join courses C on S.course_id=C.course_id
    UNION    
    select * from student S
    right join courses C on S.course_id=C.course_id;





 select C.course_id, C.course_name, C.start_date, C.end_date, C.video_expire_days, V.video_id, V.title, V.added_at from courses C
     join videos V on C.course_id = V.course_id;