import LogoutButton from '../components/LogOutButton'

function CRUD() {
  return (
    <div className="page">
      <h3 className='page_title'>Admin Page</h3>
      <div>
        <h3>Create a new post</h3>
        <div className='post_form'>
          <label htmlFor="">Title</label>
          <input id='title' type="text" />
          <label htmlFor="content">Content</label>
          <textarea id="content" type="text" />
          <label htmlFor="image">Image (optional)</label>
          <input type="url" />
          <label htmlFor="link">Link (optional)</label>
          <input type="url" />
          <button>submit</button>
        </div>
      </div>
      <LogoutButton/>
    </div>
  )
}

export default CRUD
