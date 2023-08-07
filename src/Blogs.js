const myBlogs = [
{
    blog_id: 'trimesterOne_blogOne',
    blog_title: 'Trimester One Blog One',
    blog_content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio id optio, rem est blanditiis quo ipsum quaerat, voluptatem obcaecati aspernatur, illo commodi quis perspiciatis iure adipisci totam necessitatibus! Velit, molestias dolorem commodi eius laborum nesciunt corporis rem itaque consectetur accusamus nihil nisi veniam aliquam necessitatibus suscipit maxime officia fuga! Soluta.',
    blog_author: 'DadToBe',
    blog_date: '2023-03-20',
},
{
    blog_id: 'trimesterOne_blogTwo',
    blog_title: 'Trimester One Blog Two',
    blog_content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio id optio, rem est blanditiis quo ipsum quaerat, voluptatem obcaecati aspernatur, illo commodi quis perspiciatis iure adipisci totam necessitatibus! Velit, molestias dolorem commodi eius laborum nesciunt corporis rem itaque consectetur accusamus nihil nisi veniam aliquam necessitatibus suscipit maxime officia fuga! Soluta.',
    blog_author: 'DadToBe',
    blog_date: '2023-04-10',
},
{
    blog_id: 'trimesterOne_blogThree',
    blog_title: 'Trimester One Blog Three',
    blog_content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio id optio, rem est blanditiis quo ipsum quaerat, voluptatem obcaecati aspernatur, illo commodi quis perspiciatis iure adipisci totam necessitatibus! Velit, molestias dolorem commodi eius laborum nesciunt corporis rem itaque consectetur accusamus nihil nisi veniam aliquam necessitatibus suscipit maxime officia fuga! Soluta.',
    blog_author: 'DadToBe',
    blog_date: '2023-04-28',
},
{
    blog_id: 'trimesterOne_blogFour',
    blog_title: 'Trimester One Blog Four',
    blog_content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio id optio, rem est blanditiis quo ipsum quaerat, voluptatem obcaecati aspernatur, illo commodi quis perspiciatis iure adipisci totam necessitatibus! Velit, molestias dolorem commodi eius laborum nesciunt corporis rem itaque consectetur accusamus nihil nisi veniam aliquam necessitatibus suscipit maxime officia fuga! Soluta.',
    blog_author: 'DadToBe',
    blog_date: '2023-05-15',
},
{
    blog_id: 'trimesterOne_blogFive',
    blog_title: 'Trimester One Blog Five',
    blog_content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio id optio, rem est blanditiis quo ipsum quaerat, voluptatem obcaecati aspernatur, illo commodi quis perspiciatis iure adipisci totam necessitatibus! Velit, molestias dolorem commodi eius laborum nesciunt corporis rem itaque consectetur accusamus nihil nisi veniam aliquam necessitatibus suscipit maxime officia fuga! Soluta.',
    blog_author: 'DadToBe',
    blog_date: '2023-05-30',
},
{
    blog_id: 'trimesterTwo_blogOne',
    blog_title: 'Trimester Two Blog One',
    blog_content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio id optio, rem est blanditiis quo ipsum quaerat, voluptatem obcaecati aspernatur, illo commodi quis perspiciatis iure adipisci totam necessitatibus! Velit, molestias dolorem commodi eius laborum nesciunt corporis rem itaque consectetur accusamus nihil nisi veniam aliquam necessitatibus suscipit maxime officia fuga! Soluta.',
    blog_author: 'DadToBe',
    blog_date: '2023-06-15',
},



]


const mappedBlogs = myBlogs.map((blog) => {
    return (
        <div className="col-sm-12 col-lg-4">
            <h2 className="">{blog.blog_title}</h2>
            <p className="">{blog.blog_content}</p>
            <h5 className="text-end">Author : {blog.blog_author}</h5>
            <h6 className="text-end"> Published : {blog.blog_date}</h6>
        </div>
    )
});


function ShowBlogs() {
return (
<div className='row'>
{mappedBlogs}
</div>
)};

export default ShowBlogs;