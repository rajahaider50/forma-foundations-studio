package com.premium.template.adminandroid.feature.modules
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
@Composable fun AgentsScreen(onCreate:()->Unit){Card{Column{Text("Agents");Text("Domain-specific agents workflow");Button(onClick=onCreate){Text("Create")}}}}
