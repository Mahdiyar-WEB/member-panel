import Link from "next/link";

const AdminHeader = () => {
  return (
    <nav className="mx-3">
      <ul className="w-100 rounded rounded-3 d-flex justify-content-center gap-5 py-4 px-2 bg-primary">
        <li >
          <Link className="text-white fw-bold" href="/admin/products">Products</Link>
        </li>
        <li>
          <Link className="text-white fw-bold" href="/admin/users">Users</Link>
        </li>
        <li>
          <Link className="text-white fw-bold" href="/admin/orders">Orders</Link>
        </li>
        <li>
          <Link className="text-white fw-bold" href="/">Logout</Link>
        </li>
      </ul>
    </nav>
  );
};

export default AdminHeader;
