package com.premium.template.adminandroid.feature.modules
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
@Composable fun FollowingScreen(onCreate:()->Unit){Card{Column{Text("Following");Text("Domain-specific following workflow");Button(onClick=onCreate){Text("Create")}}}}
