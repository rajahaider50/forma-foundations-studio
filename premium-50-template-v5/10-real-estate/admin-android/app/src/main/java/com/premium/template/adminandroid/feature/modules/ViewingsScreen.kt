package com.premium.template.adminandroid.feature.modules
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
@Composable fun ViewingsScreen(onCreate:()->Unit){Card{Column{Text("Viewings");Text("Domain-specific viewings workflow");Button(onClick=onCreate){Text("Create")}}}}
