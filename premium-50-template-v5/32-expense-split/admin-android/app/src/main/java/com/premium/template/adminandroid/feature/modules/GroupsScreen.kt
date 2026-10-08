package com.premium.template.adminandroid.feature.modules
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
@Composable fun GroupsScreen(onCreate:()->Unit){Card{Column{Text("Groups");Text("Domain-specific groups workflow");Button(onClick=onCreate){Text("Create")}}}}
