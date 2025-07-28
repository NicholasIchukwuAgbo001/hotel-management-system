import Image from "next/image";

function SignInButton() {
  return (
    <button
      className="flex items-center gap-4 text-sm sm:text-base border border-primary-300 px-6 py-3 font-medium rounded-md hover:bg-primary-50 transition-colors"
      aria-label="Sign in with Google"
    >
      <Image
        src="https://authjs.dev/img/providers/google.svg"
        alt="Google logo"
        width={24}
        height={24}
        className="w-6 h-6"
      />
      <span>Continue with Google</span>
    </button>
  );
}

export default SignInButton;
