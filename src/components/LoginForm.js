export function LoginForm() {
  return `
    <form id="login-form" class="card w-full max-w-sm shadow-xl bg-base-100 p-8 mx-auto my-12 rounded-lg">
      <h2 class="text-3xl font-extrabold mb-6 text-center text-indigo-700">Login</h2>

      <div class="form-control mb-5">
        <label class="label">
          <span class="label-text font-semibold text-indigo-600">Email</span>
        </label>
        <input 
          type="email" 
          class="input input-bordered input-md focus:outline-indigo-500 focus:ring-2 focus:ring-indigo-300" 
          placeholder="you@example.com"
          required 
        />
      </div>

      <div class="form-control mb-8">
        <label class="label">
          <span class="label-text font-semibold text-indigo-600">Password</span>
        </label>
        <input 
          type="password" 
          class="input input-bordered input-md focus:outline-indigo-500 focus:ring-2 focus:ring-indigo-300" 
          placeholder="********"
          required 
        />
      </div>

      <button type="submit" class="btn btn-primary btn-block text-lg font-semibold hover:bg-indigo-800 transition">
        Login
      </button>
    </form>
  `;
}

