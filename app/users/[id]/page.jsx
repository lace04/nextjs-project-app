async function getUser(id) {
  const res = await fetch(`https://reqres.in/api/users/${id}`);
  const data = await res.json();
  return data.data;
}

async function UsersPage({ params }) {
  const user = await getUser(params.id);

  return (
    <div className='row'>
      <div className='col-md-6 offset-md-3'>
        <div className='card card-body'>
          <div className='d-flex gap-4'>
            <div className='justify-content-center align-items-center'>
              <img
                src={user.avatar}
                alt={user.first_name}
                style={{ borderRadius: '50%' }}
              />
              <h5>
                {user.first_name} {user.last_name}
              </h5>
              <p>{user.email}</p>
            </div>
            <div className='d-flex justify-content-center align-items-center'>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. A
                provident exercitationem illo, similique, harum quisquam
                deleniti voluptates earum laudantium ab blanditiis officiis,
                minima reiciendis perferendis nemo dolor quas fugit
                perspiciatis!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UsersPage;
