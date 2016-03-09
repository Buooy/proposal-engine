<div class="navbar navbar-default navbar-fixed-top">
    <div class="container">
        <div class="navbar-header">
            <button type="button" data-toggle="collapse" data-target=".navbar-collapse" class="navbar-toggle">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button><a href="/" class="navbar-brand">
            <i class="fa fa-usd"></i> Quotation Engine</a>
        </div>
        <div class="collapse navbar-collapse">
            <ul class="nav navbar-nav">
                <li class="<?php echo e(request()->path() == "/" ? 'active' : 'n'); ?>"><a href="/">Home</a></li>
                <li class="<?php echo e(request()->path() == "api" ? 'active' : 'n'); ?>"><a href="/api">API Examples</a></li>
                <li class="<?php echo e(request()->path() == "engine" ? 'active' : 'n'); ?>"><a href="/engine">Engine</a></li>
            </ul>

            <?php if(Auth::guest()): ?>
            <ul class="nav navbar-nav navbar-right">
                <li class="<?php echo e(request()->path() == "login" ? 'active' : 'n'); ?>"><a href="/login">Login</a></li>
                <li class="<?php echo e(request()->path() == "signup" ? 'active' : 'n'); ?>"><a href="/signup">Create Account</a></li>
            </ul>
            <?php else: ?>
            <ul class="nav navbar-nav navbar-right">
            <li class="dropdown">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">
                    <img src="<?php echo e(Auth::user()->getAvatarUrl()); ?>" width="25" height="25" /> <?php echo e(Auth::user()->fullname); ?> <span class="caret"></span>
                </a>
                <ul class="dropdown-menu" role="menu">
                    <li><a href="<?php echo e(route('account.dashboard')); ?>"><i class="fa fa-btn fa-user"></i> My Account</a></li>
                    <li><a href="<?php echo e(route('logout')); ?>"><i class="fa fa-btn fa-sign-out"></i> Logout</a></li>
                </ul>
            </li>
            </ul>
            <?php endif; ?>
        </div>
    </div>
</div>