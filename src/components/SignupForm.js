export function SignupForm() {
  return `
    <form id="signup-form" class="card w-full max-w-sm shadow-md bg-base-100 p-6 mx-auto my-8">
      <h2 class="text-2xl font-bold mb-4">Sign Up</h2>
      <div class="form-control mb-4">
        <label class="label"><span class="label-text">Email</span></label>
        <input type="email" class="input input-bordered" required />
      </div>
      <div class="form-control mb-4">
        <label class="label"><span class="label-text">Password</span></label>
        <input type="password" class="input input-bordered" required />
      </div>
      <button type="submit" class="btn btn-secondary w-full">Create Account</button>
    </form>
  `;
}

