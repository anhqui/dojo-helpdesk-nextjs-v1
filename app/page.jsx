import Link from "next/link";
export default function Home() {
  return (
    <main>
      <h2>Dashboard</h2>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste, quaerat.
        Repellendus voluptatem tempore temporibus sint. Sed culpa similique sint
        inventore nobis cupiditate non eum suscipit, ex assumenda earum
        doloribus reiciendis iusto fugit ipsam nulla fugiat possimus nihil.
        Quidem minus quam suscipit nam. Neque facilis doloremque dolorem?
        Assumenda sit molestias eligendi.
      </p>
      <div className="flex justify-center my-8">
        <Link href="/tickets">
          <button className="btn-primary">View Tickets</button>
        </Link>
      </div>
      <h2>Company Update</h2>
      <div className="card">
        <h3>New member of the web dev team...</h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste,
          quaerat. Repellendus voluptatem tempore temporibus sint. Sed culpa
          similique sint inventore nobis cupiditate non eum suscipit, ex
          assumenda earum doloribus reiciendis iusto fugit ipsam nulla fugiat
          possimus nihil. Quidem minus quam suscipit nam. Neque facilis
          doloremque dolorem? Assumenda sit molestias eligendi.
        </p>
      </div>
      <div className="card">
        <h3>New website live</h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste,
          quaerat. Repellendus voluptatem tempore temporibus sint. Sed culpa
          similique sint inventore nobis cupiditate non eum suscipit, ex
          assumenda earum doloribus reiciendis iusto fugit ipsam nulla fugiat
          possimus nihil. Quidem minus quam suscipit nam. Neque facilis
          doloremque dolorem? Assumenda sit molestias eligendi.
        </p>
      </div>
    </main>
  );
}
